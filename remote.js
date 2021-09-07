class Remote {
    constructor(_code, _tivi) {
        this.code = _code;
        this.tivi = _tivi;
    }
    setTivi(tivi) {
        this.tivi = tivi;
    }
    changeChannel(newchannel) {
        this.tivi.setChannel(newchannel);
    }
    changVolume(newvolume) {
        this.tivi.setVolume(newvolume);
    }
    turnOnOffTV() {
        this.tivi.turnOnOff();
    }
}