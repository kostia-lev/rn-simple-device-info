module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android',
        packageImportPath:
          'import com.rnsimpledeviceinfo.SimpleDeviceInfoPackage;',
        packageInstance: 'new SimpleDeviceInfoPackage()',
      },
      ios: {},
    },
  },
};
