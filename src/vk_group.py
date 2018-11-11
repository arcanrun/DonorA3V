# -*- coding: utf-8 -*-
import vk_api
import time
from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
import json


def get_button(label, color, payload=""):
    return {
        "action": {
            "type": "text",
            "payload": json.dumps(payload),
            "label": label
        },
        "color": color
    }

keyboard = {
    "one_time": True,
    "buttons": [

    [get_button(label="Записаться на сдачу крови", color="positive")],
    [get_button(label="Главное меню", color="positive")]


    ]
}

day1 = {
    "one_time": True,
    "buttons": [[
    get_button(label="12.11", color="positive"),
    get_button(label="13.11", color="negative"),
    get_button(label="14.11", color="default"),
    get_button(label="15.11", color="primary")],
    [
    get_button(label="16.11", color="positive"),
    get_button(label="17.11", color="negative"),
    get_button(label="19.11", color="default"),
    get_button(label="20.11", color="primary")
],
    [
    get_button(label="21.11", color="positive"),
    get_button(label="22.11", color="negative"),
    get_button(label="23.11", color="default"),
    get_button(label="26.11", color="primary")],
    [
    get_button(label="27.11", color="positive"),
    get_button(label="28.11", color="negative"),
    get_button(label="29.11", color="default"),
    get_button(label="30.11", color="primary")
],
    [
    get_button(label="03.12", color="positive"),
    get_button(label="04.12", color="negative"),
    get_button(label="05.12", color="default"),
    get_button(label="06.12", color="primary")],
    [
    get_button(label="07.12", color="positive"),
    get_button(label="10.12", color="negative"),
    get_button(label="11.12", color="default"),
    get_button(label="12.12", color="primary")
],
    [
    get_button(label="13.12", color="positive"),
    get_button(label="14.12", color="negative"),
    get_button(label="17.12", color="default"),
    get_button(label="18.12", color="primary")],
    [
    get_button(label="19.12", color="positive"),
    get_button(label="20.12", color="negative"),
    get_button(label="21.12", color="default"),
    get_button(label="22.12", color="primary")
]
                ]
        
                
}

time1 = {
    "one_time": True,
    "buttons": [[
    get_button(label="08:30", color="negative"),
    get_button(label="09:00", color="negative"),
    get_button(label="09:30", color="negative"),
    get_button(label="10:00", color="negative")],
                
    [get_button(label="10:30", color="default"),
    get_button(label="11:00", color="primary"),
    get_button(label="11:30", color="primary"),
    get_button(label="12:00", color="primary")],
                
    [get_button(label="12:30", color="positive"),
    get_button(label="13:00", color="positive"),
    get_button(label="13:30", color="default"),
    get_button(label="14:00", color="default")],
    [get_button(label="Назад к дате сдачи", color="default")]

                ]}


blood1 = {
    "one_time": True,
    "buttons": [[
    get_button(label="1(+)", color="positive"),
    get_button(label="1(-)", color="negative"),
    get_button(label="2(+)", color="default")],
    [get_button(label="2(-)", color="primary"),
    get_button(label="3(+)", color="positive"),
    get_button(label="3(-)", color="negative")],
    [get_button(label="4(+)", color="default"),
    get_button(label="4(-)", color="positive"),
    get_button(label="Не знаю", color="primary")]]
 }

main0 = {
    "one_time": True,
    "buttons": [
    [get_button(label="Назад ко времени сдачи ", color="primary")
],
    [get_button(label="Главное меню", color="positive")]]}

main1 = {
    "one_time": True,
    "buttons": [
    [get_button(label="Записаться на сдачу крови", color="negative")],
    [get_button(label="Список полезных команд", color="positive")],
    [get_button(label="Агрегатор статей", color="positive")],
    [get_button(label="О Боте", color="positive")]

    ]}

article1 = {
    "one_time": True,
    "buttons": [
    [get_button(label="@donorsearch-donorskie-akcii-noyabrya", color="negative")],
    [get_button(label="Центры крови", color="positive")],
    [get_button(label="donorsearch.org/how", color="positive")]

    ]}


centers1 = {
    "one_time": True,
    "buttons": [
    [get_button(label="ГКУЗ", color="positive")],
    [get_button(label="ГБУЗ №5 ", color="positive")],
    [get_button(label="НИИ ГиТ", color="positive")],
    [get_button(label="Александровская ", color="positive")],
    [get_button(label="ГБ Елизаветы", color="positive")],
    [get_button(label="ГБ Георгия", color="positive")],
    [get_button(label="ГБ №26", color="positive")],
    [get_button(label="ГБ №31", color="positive")],
    [get_button(label="Мариинская", color="positive")],
    [get_button(label="больница №2", color="positive")]]
    
    }

reg1 = {
    "one_time": True,
    "buttons": [
    [get_button(label="По виду донации", color="positive")],
    [get_button(label="По группе крови", color="positive")],
    [get_button(label="В каком центре крови", color="positive")]

    ]}

blood2 = {
    "one_time": True,
    "buttons": [
    [get_button(label="Цельная кровь", color="negative")],
    [get_button(label="Плазма", color="negative")],
    [get_button(label="Тромбоциты", color="negative")],
    [get_button(label="Эритроциты", color="positive")],
    [get_button(label="Гранулоциты", color="positive")],
    [get_button(label="Лейкоциты", color="positive")],
    [get_button(label="Назад, на вид записи", color="positive")]

    ]}




keyboard = json.dumps(keyboard, ensure_ascii=False).encode('utf-8')
keyboard = str(keyboard.decode('utf-8'))
day1 = json.dumps(day1, ensure_ascii=False).encode('utf-8')
day1 = str(day1.decode('utf-8'))
time1 = json.dumps(time1, ensure_ascii=False).encode('utf-8')
time1 = str(time1.decode('utf-8'))
blood1 = json.dumps(blood1, ensure_ascii=False).encode('utf-8')
blood1 = str(blood1.decode('utf-8'))
main0 = json.dumps(main0, ensure_ascii=False).encode('utf-8')
main0 = str(main0.decode('utf-8'))
main1 = json.dumps(main1, ensure_ascii=False).encode('utf-8')
main1 = str(main1.decode('utf-8'))
article1 = json.dumps(article1, ensure_ascii=False).encode('utf-8')
article1 = str(article1.decode('utf-8'))
centers1 = json.dumps(centers1, ensure_ascii=False).encode('utf-8')
centers1 = str(centers1.decode('utf-8'))
reg1 = json.dumps(reg1, ensure_ascii=False).encode('utf-8')
reg1 = str(reg1.decode('utf-8'))
blood2 = json.dumps(blood2, ensure_ascii=False).encode('utf-8')
blood2 = str(blood2.decode('utf-8'))




def main():

    vk_session = vk_api.VkApi(token='808167a38dfc3ca097347a9672b73f061077df289069c51b1933a324fb2b7ef3bc9a0f113dec50cbce9f5')
    vk_session._auth_token()
    longpoll = VkBotLongPoll(vk_session, '173756271')

    for event in longpoll.listen():

        if event.type == VkBotEventType.MESSAGE_NEW:
            print('Новое сообщение:')

            print('Для меня от: ', end='')

            print(event.obj.from_id)

            print('Текст:', event.obj.text)
            print()

        elif event.type == VkBotEventType.MESSAGE_REPLY:
            print('Новое сообщение:')

            print('От меня для: ', end='')

            print(event.obj.peer_id)

            print('Текст:', event.obj.text)
            print()

        elif event.type == VkBotEventType.MESSAGE_TYPING_STATE:
            print('Печатает ', end='')

            print(event.obj.from_id, end=' ')

            print('для ', end='')

            print(event.obj.to_id)
            print()

        elif event.type == VkBotEventType.GROUP_JOIN:
            print(event.obj.user_id, end=' ')
            #id = (event.obj.peer_id)

            vk_session.method("messages.send", {"peer_id": event.obj.user_id, "message": "Поздравляем, вы вступили в сообщество доноров!", "keyboard": keyboard})
            print('Вступил в группу!')
            while True:
                try:
                #  главный цикл
                    messages = vk_session.method("messages.getConversations", {"offset": 0, "count": 50})
                    if messages["count"] >= 1:

                        id = messages["items"][0]["last_message"]["from_id"]
                        body = messages["items"][0]["last_message"]["text"]

                        if body == "Виды записей на сдачу крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобный для вас вариант регистрации.", "keyboard": reg1})   


                        elif body == "Записаться на сдачу крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобный для вас вариант регистрации", "keyboard": reg1})
                        elif body == "1(+)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "1(-)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "2(+)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "2(-)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "3(+)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "3(-)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "4(+)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "4(-)":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "Не знаю":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        
                        
                        elif body == "12.11" :
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "13.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "14.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "15.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "16.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "17.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "19.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "20.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "21.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "22.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "23.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "26.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "27.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "28.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "29.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "30.11":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "03.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "04.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "05.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "06.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "07.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "10.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "11.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "12.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "13.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "14.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "17.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "18.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "19.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "20.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "21.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body == "22.12":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        
                        elif body == "Назад к группе крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Укажите свою группу крови", "keyboard": blood1})
                            
                        elif body=="08:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="09:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="09:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="10:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="10:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="11:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="11:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="12:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="12:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="13:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="13:30":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})
                        elif body=="14:00":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Вы успешно зарегистрировались на сдачу крови! Ждем вас в назначенное время.", "keyboard": main0})

                        elif body == "Назад к дате сдачи":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body == "Список полезных команд":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Главное меню \n Записаться на сдачу крови \n Центры крови", "keyboard": main1})
                        elif body == "Агрегатор статей":
                            vk_session.method("messages.send", {"peer_id": id, "message": "https://vk.com/@-173756271-komanda-a3v-vas-privetstvuet-na-stranice-soobschestva-sozdan  \n https://donorsearch.org/how", "keyboard": main1})

                        elif body == "Назад ко времени сдачи":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобное для вас время.\n Красным обозначены наиболее загруженные временные интервалы \n Синим - средней загруженности \n И серым - с отсутствием очереди.", "keyboard": time1})
                        elif body=="Главное меню":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Главное меню", "keyboard": main1})
                        elif body=="Центры крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Список", "keyboard": centers1})

                        elif body=="Привет":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Привет!\n Я бот - консультант DonorSearch.org - крупнейшего интернет сообщества по популяризации донорства!\n В мои обязанности входит:\n-Помочь выбрать удобную для вас дату и время сдачи крови\n Также хочу вам посоветовать зайди на Платформу https://vk.com/app6746932 !", "keyboard": main1})
                        elif body=="привет":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Привет!\n Я бот - консультант DonorSearch.org - крупнейшего интернет сообщества по популяризации донорства!\n В мои обязанности входит:\n-Помочь выбрать удобную для вас дату и время сдачи крови\n Также хочу вам посоветовать зайди на Платформу https://vk.com/app6746932 !", "keyboard": main1})
                        elif body=="О Боте":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Привет!\n Я бот - консультант DonorSearch.org - крупнейшего интернет сообщества по популяризации донорства!\n В мои обязанности входит:\n-Помочь выбрать удобную для вас дату и время сдачи крови\n Также хочу вам посоветовать зайди на Платформу https://vk.com/app6746932 !", "keyboard": main1})


                        elif body=="По группе крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Список групп крови с резус-фактором", "keyboard": blood1})     
                        elif body=="В каком центре крови":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Список центров сдачи крови", "keyboard": centers1})
                        elif body=="ГКУЗ":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="ГБУЗ №5":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="НИИ ГиТ":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Александровская":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="ГБ Елизаветы":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="ГБ Георгия":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="ГБ №26":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="ГБ №31":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Мариинская":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="больница №2":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})


                        elif body=="По виду донации":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Виды донации крови", "keyboard": blood2})
                        elif body=="Цельная кровь":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Плазма":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Тромбоциты":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Эритроциты":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Гранулоциты":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Лейкоциты":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобную для вас дату сдачи.", "keyboard": day1})
                        elif body=="Назад, на запись":
                            vk_session.method("messages.send", {"peer_id": id, "message": "Выберите удобный для вас вариант регистрации", "keyboard": reg1})

                        

                        else:
                            vk_session.method("messages.send", {"peer_id": id, "message": "Я не понял тебя, напиши ещё раз."})

                    time.sleep(0.5)
                except Exception as E:
                    time.sleep(1)
            print()

        elif event.type == VkBotEventType.GROUP_LEAVE:
            print(event.obj.user_id, end=' ')

            print('Покинул группу!')
            print()

        else:
            print(event.type)
            print()




if __name__ == '__main__':
    main()



