import logo from './logo.svg';
import './App.css';
import { Formik, FormikErrors, FormikHelpers, useFormik } from 'formik';
import { ICreateAccountForm } from './types';
import { CreateAccountFormValidation } from './ validation';

const App = () => {
	const initialData: ICreateAccountForm = {};

	const handleSubmission = (values: ICreateAccountForm, errors: ICreateAccountForm) => {
		debugger
		if (hasErrors(errors)) {
			alert('Errors')
		} else {
			alert('success')
		}
	}

	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		isSubmitting } = useFormik<ICreateAccountForm>({
			initialValues: initialData,
			onSubmit: () => handleSubmission(values as ICreateAccountForm, errors),
			validate: () => validate(values)
		},
			// validate:{values => validate(values)},

		);

	const validate = (data: ICreateAccountForm) => {
		return CreateAccountFormValidation(data);
	}



	const hasErrors = (errors: ICreateAccountForm) => {
		const errorFound = Object.keys(errors).find((key: string) => errors[key as keyof ICreateAccountForm] !== '');

		return errorFound;
	}

	return (
		<div className="App">
			<Formik
				initialValues={initialData}

				validateOnChange={false}
			>
				{() => {
					return (
						<form onSubmit={handleSubmit}>
							<div>
								<label>First Name</label>
								<input
									type="text"
									name="firstName"
									onChange={handleChange}
									value={values.firstName} />

							</div>
							<div>
								<label>Last Name</label>
								<input
									type="text"
									name="lastName"
									onChange={handleChange}
									value={values.lastName} />

							</div>
							<div>
								<label>Email</label>
								<input
									type="email"
									name="email"
									onChange={handleChange}
									value={values.email} />

							</div>
							<div>
								<label>Password</label>
								<input
									type="password"
									name="password"
									onChange={handleChange}
									value={values.password} />

							</div>
							{hasErrors(errors) && <div className='errors'>
								{errors.firstName && <span>{errors.firstName}</span>}
								{errors.lastName && <span>{errors.lastName}</span>}
								{errors.email && <span>{errors.email}</span>}
								{errors.password && <span>{errors.password}</span>}
							</div>
							}
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</form>
					);
				}}
			</Formik>
		</div>
	);
}

export default App;
