I2C_LCD1602.LcdInit(39)

radio.setGroup(1)

radio.onReceivedString(function(onReceivedString){
    if (onReceivedString == "Happy new year"){
        I2C_LCD1602.ShowString("Happy new year",1,1)
    }

    else if (onReceivedString == "Clear"){
        I2C_LCD1602.clear()
    }

})