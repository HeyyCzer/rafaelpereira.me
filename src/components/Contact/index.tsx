"use client";

import { useForm, ValidationError } from '@formspree/react';
import { faPaperPlane } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, TextArea } from './Input';

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mjkbroew");

	const Form = () => (
		<form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
			<div className="flex flex-col">
				<label htmlFor="email">
					Seu e-mail
				</label>
				<Input
					// className="border border-white/10 py-2 px-2 outline-none focus:border-cyan-500 rounded-lg bg-transparent"
					placeholder="exemplo@rafaelpereira.me"
					id="email"
					type="email"
					required
					name="email"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="message">
					Sua mensagem
				</label>
				<TextArea
					// className="border border-white/10 py-2 px-2 outline-none focus:border-cyan-500 rounded-lg bg-transparent"
					id="message"
					name="message"
					required
					placeholder="Por favor, me diga como posso te ajudar."
					rows={4}
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>

			<button type="submit" disabled={state.submitting} className="flex items-center w-fit gap-x-2 py-1.5 px-2 bg-cyan-500 text-white rounded-lg">
				<FontAwesomeIcon icon={faPaperPlane} className="text-neutral-200" />
				Enviar mensagem
			</button>
		</form>
	)

	return (
		<div className="mx-auto py-4 px-6 w-full rounded-lg border border-white/10 flex flex-col gap-4">
			<h2 className="text-lg font-bold text-neutral-200">
				Envie uma mensagem
			</h2>

			{
				state.succeeded ? (
					<div>
						<p className="text-neutral-200">
							Sua mensagem foi enviada com sucesso!
						</p>
						<p className="text-neutral-200">
							Em breve retornarei sua mensagem pelo e-mail, enquanto isso você pode me encontrar nas redes sociais.
						</p>
						<p className="text-neutral-200">
							Desde já agredeço o seu contato.
						</p>
					</div>
				): (
					<Form />
				)
			}
			
		</div>
	);
}
