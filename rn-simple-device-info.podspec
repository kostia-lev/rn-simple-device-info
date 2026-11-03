require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = "rn-simple-device-info"
  s.version = package["version"]
  s.summary = package["description"]
  s.description = package["description"]
  s.homepage = package["homepage"]
  s.license = package["license"]
  s.authors = package["author"]
  s.platforms = { :ios => "15.1" }
  s.source = {
    :git => package["repository"]["url"].sub("git+", ""),
    :tag => "#{s.version}"
  }

  s.source_files = "ios/**/*.{h,m,mm}"
  s.pod_target_xcconfig = { "CLANG_CXX_LANGUAGE_STANDARD" => "c++20" }

  install_modules_dependencies(s)
end
