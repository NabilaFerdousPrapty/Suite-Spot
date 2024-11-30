'use server'
type SocialLoginFormData = {
    get: (key: string) => string | null;
};

export async function doSocialLogin(formData: SocialLoginFormData) {
    const action = formData.get('action');
    if (typeof action === 'string') {
        console.log(action); // Safely log the string action
    } else {
        console.error('Expected a string, but got a non-string value.');
    }
}

export async function doLogOut() {
    
}