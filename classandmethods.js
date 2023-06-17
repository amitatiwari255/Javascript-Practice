class Mobile{
    phoneModel = "OnePlus"
    #unlockPIN = 1234

    makeCall(){
        console.log("Calling someone");
    }
    sendSMS(){
        console.log("sending");
    }
    get getUnlockPIN(){
        return this.#unlockPIN;
    }
    set UnlockPIN(value){
        this.#unlockPIN = value
    }
}

const myMobile = new Mobile();
myMobile.sendSMS()
console.log(myMobile.phoneModel);
console.log(myMobile.getUnlockPIN());
myMobile.UnlockPIN = 4321
console.log(myMobile.getUnlockPIN);