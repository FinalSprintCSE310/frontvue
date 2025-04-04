export async function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get the form data
    const data = Object.fromEntries(formData.entries()); // Convert to an object

    // Ensure the body matches the required format
    const requestBody = {
        Firstname: data.fname || "",  // Map first_name from form
        Lastname: data.lname || "",    // Map last_name from form
        Gender: data.gender || "",         // Map gender from form
        DateOfBirth: data.dob || "",       // Map date of birth (ensure correct format)
        Email: data.email,                 // Map email from form
        Password: data.pass,           // Map password from form
        Role: data.role || "Student",      // Default role to "Student" if not provided
        SchoolId: parseInt(data.school, 10) || 0 // Convert SchoolId to an integer
    };

    try {
        const response = await fetch('http://localhost:8000/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            console.log('Registration successful!');
        } else {
            console.error('Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// register organization
export async function registerOrg(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get the form data
    const data = Object.fromEntries(formData.entries()); // Convert to an object

    // Ensure the body matches the required format
    const requestBody = {
        Name: data.school_name,  // Map school_name to Name
        Email: data.school_email, // Map school_email to Email
        Password: data.school_pass // Map school_pass to Password
    };

    try {
        const response = await fetch('http://localhost:8000/api/v1/school/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            console.log('Registration successful!');
        } else {
            console.error('Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function loginOrg(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:8000/api/v1/school/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Email: data.email,   // Get email from form
            Password: data.password,  // Get password from form
        }),
    });

    console.log('Login Response:', response);
}
