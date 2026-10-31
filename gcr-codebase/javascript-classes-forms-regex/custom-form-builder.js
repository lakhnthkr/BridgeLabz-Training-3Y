class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = `<h2>Dynamic Form</h2><form id="dynamicForm">`;

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}:</label>
                <input type="${field.type}" name="${field.label}" required>
                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
            <pre id="result"></pre>
        `;

        document.body.innerHTML = formHTML;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("result").textContent =
                JSON.stringify(data, null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("dynamicForm");
        const formData = new FormData(form);
        const result = {};

        for (const [key, value] of formData.entries()) {
            result[key] = value;
        }

        return result;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const form = new FormBuilder(fields);
form.createForm();