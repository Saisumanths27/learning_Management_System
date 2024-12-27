document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            alert('User created successfully!');
        } else {
            const result = await response.json();
            alert('Error: ' + result.error);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('An error occurred.');
    }
});
