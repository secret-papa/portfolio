class DeviceChecker {
  constructor() {
    this.filter = 'win16|win32|win64|mac|macintel';
  }

  checkMobile(platform) {
    return this.filter.indexOf(platform.toLowerCase()) < 0;
  }
}

export default DeviceChecker;