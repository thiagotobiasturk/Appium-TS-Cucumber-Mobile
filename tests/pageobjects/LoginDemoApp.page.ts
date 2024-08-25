class LoginAndSigIn {
    
    get loginButton() { return $('//android.widget.TextView[@text="Login"]'); }
    get usernameInput() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Password"]'); }
    get submitButton() { return $('//android.widget.TextView[@text="LOGIN"]'); }
    get successMessage() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]'); }
    get okButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }    
    get open() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup');}
    
    async openvieww() {
        await this.open;
    }

    async loginiconButton() {
        await this.loginButton.click();
    }
    
    async setUsername(username: string) { 
        await this.usernameInput.setValue(username);
    }

        async setPassword(password: string) { 
        await this.passwordInput.setValue(password);
    }
    
    async submitLoginForm() {
        await this.submitButton.click();
    }
    
    async loginsuccesfull() {
        await this.successMessage;
    }
  
    async okSucces() {
        await this.okButton.click();
    }
}

export default new LoginAndSigIn();
