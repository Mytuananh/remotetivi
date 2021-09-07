class Tivi {
    constructor(_channel, _volume, _status) {
    this.channel = _channel;
    this.volume = _volume;
    this.status = _status;
    }
    setChannel(channel) {
        this.channel = channel;
    }
    setVolume(volume) {
        this.volume = volume;
    }
    turnOnOff() {
        this.status = !this.status;
    }
}