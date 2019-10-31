import ask from '../../steps/ask';
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters/index';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('check: big text in theme', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию
    
	// it('Написать текст в поле "Тема вопроса", а затем удалить его. Дождаться появления соответствующей категории', () => {
    //     ask.open('https://otvet.mail.ru/ask');
    //     ask.fillAndCleanQuestionText();
    //     ask.waitForEmptyThemeAlert();
    // });

    // it('Проверить кнопку войти', () => {
    //     ask.open('https://otvet.mail.ru/ask');
    //     ask.pressLoginButton();
    //     ask.waitForLoginForm();
    // });

	it('Написать длинный текст ( > 120 символов) в поле "Тема вопроса" и дождаться появления соответствующей категории', () => {
        ask.open('https://otvet.mail.ru/ask');
        ask.writeQuestionText('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        ask.waitForBigThemeAlert();
    });
});