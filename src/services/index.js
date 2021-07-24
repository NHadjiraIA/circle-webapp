/**
 * Here you can export functions with corresponding services / endpoints.
 * You can always use the services directly from the specific moduleServices file as well.
 * This is to keep a track of all available services as a list.
 * I think it makes is easy to maintain when you have a long long list as your app gradually scales.
 */ 

export {getAllUsers} from './userServices';
// export {getUserDetails} from './userServices';
export {getQuestion} from './questionService';
export {getFields} from './fieldsService';
export {getNextQuestion} from './nextQuestionService';
export {getPreviousQuestion} from './previousQuestionService';
export {postMessageReport} from './addMessageReportService';
export {getMessageReport} from './messageReportService';
export {deleteMessageReport} from './deleteMessageReportService';
export {getResponseOfQuestionToUpdate} from './ResponseQuestionToUpdateService';
export {postLogin} from './loginService';
export {deleteNextAnswers} from './nextQuestionService'
export {putUserAnswer} from './nextQuestionService'
export {getUserDetails} from './loginService'
