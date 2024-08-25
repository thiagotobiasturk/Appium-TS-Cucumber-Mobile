import AppScreen from './AppScreen.js';
import Gestures from '../helpers/Gestures.js';

const SELECTORS = {
    SCREEN: '~Login-screen',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () {return $(SELECTORS.SCREEN);}
    private get loginContainerButton () {return $('//android.widget.EditText[@text="Email"]');}
    private get passContainerButton () {return $('//android.widget.EditText[@text="Password"]');}
    private get email () {return $('//android.widget.EditText[@text="Email"]');}
    private get password () {return $('//android.widget.EditText[@text="Password"]');}
    private get repeatPassword () {return $('~input-repeat-password');}

    async passwContainerButton(){
        await this.passContainerButton.click();
    }
    
    async tapOnLoginContainerButton(){
        await this.loginContainerButton.click();
    }

    async enterPassword({ password }: { password: string; }) {
            await this.password.setValue(password);
    }    
    
    async submitLoginForm({ username}: { username: string; }) {
        await this.email.setValue(username);
        

        // if (await driver.isKeyboardShown()) {
        //     /**
        //      * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
        //      * on iOS when using the command. You will get an error like below
        //      *
        //      *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
        //      *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
        //      *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
        //      *  it in the way supported by your application under test.}
        //      *
        //      * That's why we click outside of the keyboard.
        //      */
        //     await $('~Login-screen').click();
        // }
    
      }  
    }

export default new LoginScreen();
