class Login {
    get usernameInput() { return $('//android.widget.EditText[@text="Email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Password"]'); }
    get submitButton() { return $('(//android.widget.TextView[@text="Sign In"])[2]'); }
    get successMessage() { return $('//android.widget.ScrollView/android.view.ViewGroup'); }
    get unsuccessfulMessage() { return $('//android.widget.TextView[@text="Incorrect email or password."]'); }  
    get open() { return $('//android.view.View');}
    
    async openview() {
        await this.open;
    }

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
