class Login {
    get usernameInput() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="input-password"]'); }
    get submitButton() { return $('//android.widget.TextView[@text="LOGIN"]'); }
    get successMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]'); }
    get unsuccessfulMessage() { return $('//android.widget.TextView[@text="Incorrect email or password."]'); }  
   
    async setUsername(username: string) { 
        await this.usernameInput.setValue(username);
    }

    
    async submitLoginForm() {
        await this.submitButton.click();
    }
    
    async setPassword(password: string) { 
        await this.passwordInput.setValue(password);
    }   
    
    async loginsuccesfull() {
        await this.successMessage;
    }
   
    async loginunsuccessful() {
        await this.unsuccessfulMessage;
    }
}

export default new Login();
