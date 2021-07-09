/**
 * All API urls and other constants will reside here.
 * It is always a good idea to keep a local copy of all API response to 
 * keep your app working for UI changes and 
 * make it independent of network requirements.
 * 
 * They need to be categorised and grouped together as:
 *  - Actual endpoints url.
 *  - Local data .json file path.
 * At a moment only one group should be uncommented.
 * 
 * Other way to deal with this is to name every json file as per your service endpoint and use a basepath variable.
 * Toggle this basePath variable between "actual-domain.com/" or "/data/".
 */

// Actual endpoints. Uncomment below section to use actual data.
// export const GET_ALL_USERS = () => `https://jsonplaceholder.typicode.com/users`;
// export const GET_USER_DETAILS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Local endpoints. Uncomment below section to use dummy local data.
 
export const BASE_ADDRESS = () => 'http://localhost:5000'
export const GET_ALL_USERS = () => `/data/users`;
export const GET_USER_DETAILS = (id) => `/data/user`;
export const GET_ALL_QUESTIONS = () => BASE_ADDRESS() + '/question';
export const GET_ONE_QUESTION = (id_question) => BASE_ADDRESS() + '/api/v1/questions/'+id_question;
export const GET_ALL_FIELDS = () => BASE_ADDRESS() + '/fields';
export const GET_NEXT_QUESTION = (id_question,id_chosen_answer,id_field) => BASE_ADDRESS() + '/api/v1/questions/next'+'?id_question='+id_question+'&'+'id_chosen_answer='+id_chosen_answer+'&id_field='+id_field;
export const GET_PREVIOUS_QUESTION = (id_question,id_field) => BASE_ADDRESS() + '/api/v1/questions/previous'+'?id_question='+id_question+'&'+'&id_field='+id_field;
export const POST_RESPONSE_USER =()=>BASE_ADDRESS()+'/api/v1/response/user';
export const GET_MESSAGE_REPORT =(id_user,id_field) => BASE_ADDRESS() + '/api/v1/raport/messages'+'?id_user='+id_user+'&id_field='+id_field;
export const DELETE_MESSAGE_REPORT =(id_user,id_question,survery_answer_code)=>BASE_ADDRESS()+'/api/v1/responses'+'?id_user='+id_user+'&id_question='+id_question+'&survery_answer_code='+survery_answer_code;
export const GET_QUESTION_ANSWERED = (id_user,id_question,survery_answer_code)=>BASE_ADDRESS()+'/api/v1/questions/answered'+'?id_question='+id_question+'&id_user='+id_user+'&code_user_response='+survery_answer_code;
export const POST_LOGIN_USER = ()=>BASE_ADDRESS()+'/login';