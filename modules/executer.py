# берёт на себя приём и выполнение команд пользователя

from random import choice

from modules.shutdowner import ShutdownByTime
# from modules.dream_control import DreamController                                     # улучшу позже
from modules.terminal_methods import Terminal


# Сделать:
# -- обработчик исключений (для выключения, например)
# -- запуск в фоне с приёмом ключей


class Executer:
    def __init__(self):
        # self.dream_control = DreamController()                                        # улучшу позже
        self.shutdown_by_time = ShutdownByTime
        self.terminal = Terminal()

        while True:
            self.do(self.listen())

    def listen(self):
        return input('>: ')

    def do(self, user_input):
        if 'выкл' in user_input:
            """ выключает пекарню в заданное пользователем время """
            # образец команды - "выключи в 00:00"
            self.shutdown_by_time(user_input.split()[2])
            self.terminal.print('Хорошо. Выключу в {}'.format(user_input.split()[2]))

        elif 'или' in user_input:
            """ помогает юзеру сделать сложный выбор """
            # делит строку и рандомно выбирает то или это
            was_choiced = choice(user_input.split('или'))

            # чтобы пробелов не было
            if was_choiced[0] == ' ':
                was_choiced = was_choiced.replace(' ', '', 1)

            self.terminal.print(was_choiced)

        # elif 'сколько' in user_input or 'до сна' in user_input:                          # улучшу позже 
        #     """ выводит время на бодрствование """                                       # формат: "4,5 ч"
        #     # та самая непонятно зачем функция, даже то, что ниже полезнее
        #     time = self.dream_control.get_time_for_awareness()
        #     self.terminal.print('{0} ч'.format(round(time.seconds / 3600, 1)))

        elif 'test' in user_input or 'тест' in user_input:
            """ если всё работает, выводит, что работает """
            # просто узнать, что ничего не сломал
            self.terminal.print('Работаю')


if __name__ == '__main__':
    executer = Executer()
