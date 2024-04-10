import { fail } from '@sveltejs/kit';

export const actions = {
	application: async ({ cookies, request }) => {
        const data = await request.formData();
        const fields = ['name', 'email', 'phone', 'address', 'gender', 'education', 'message'];
        for (const field of fields) {
            if (!data.get(field)) {
                return fail(400, { [field]: "is requeired" });
            }
        }
	}
};