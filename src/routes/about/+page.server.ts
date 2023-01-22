import { error } from '@sveltejs/kit'

// export async function load({ id, content }: FeedbackRequest) {
//     let response = await fetch('http://ku-stacks.com/api/v1/feedback', {
//         method: 'POST',
//         body: JSON.stringify({
//             "id": id,
//             "content": content
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         }
//     });
//     let result = await response.json() as FeedbackResponse;
//     return result
// }

// type FeedbackRequest = {
//     id: string,
//     content: string
// }

// export type FeedbackResponse = {
//     isSuccess: boolean,
//     resultMsg: string,
//     resultCode: number
// }