'use client';
import TwoColumnLayout from '../components/TwoColumnLayout';
import { Form, Input, PasswordInput, FormSpacer } from './components/Form';
import { Button } from './components/form/SubmitButton';

function handleSubmit() {
	return;
}

export default function SignInPage() {
	return (
		<TwoColumnLayout
			title={`Sign in`}
			intro={`Please sign in to use this site`}
			columnOne={
				// <FeedbackMessage />
				<Form onSubmit={handleSubmit}>
					<FormSpacer />
					<Input
						autoComplete="email"
						dataTestID="email-input"
						id="email"
						label="Email"
						name="email"
						type="email"
						value={''}
						onChange={() => null}
					/>
					<PasswordInput
						autoComplete="current-password"
						dataTestID="password-input"
						id="password"
						label="Password"
						name="password"
						value={''}
						onChange={() => null}
					/>
					<Button
						dataTestID="sign-in-button"
						disabled={false}
						text={'Sign in'}
						type="submit"
						variant={'primary'}
					/>
				</Form>
			}
		/>
	);
}
