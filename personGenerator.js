const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алина",
            "id_2": "Екатерина",
            "id_3": "Ольга",
            "id_4": "Мария",
            "id_5": "Анна",
            "id_6": "Вероника",
            "id_7": "Ирина",
            "id_8": "Татьяна",
            "id_9": "Наталья",
            "id_10": "Альбина"
        }
    }`,

    jobJson: `{
        "count": 18,
        "list": {     
            "id_1": {"spec": "Слесарь", "gender" : "Male"},
            "id_2": {"spec": "Шахтер", "gender" : "Male"},
            "id_3": {"spec": "Инженер", "gender" : "Male"},
            "id_4": {"spec": "Космонавт", "gender" : "Male"},
            "id_5": {"spec": "Водитель", "gender" : "Male"},
            "id_6": {"spec": "Полицейский", "gender" : "Male"},
            "id_7": {"spec": "Строитель", "gender" : "Male"},
            "id_8": {"spec": "Военный", "gender" : "Male"},
            "id_9": {"spec": "Плотник", "gender" : "Male"},
            "id_10": {"spec": "Футболист", "gender" : "Male"},
            "id_11": {"spec": "Медсестра", "gender" : "Female"},
            "id_12": {"spec": "Учительница", "gender" : "Female"},
            "id_13": {"spec": "Модель", "gender" : "Female"},
            "id_14": {"spec": "Балерина", "gender" : "Female"},
            "id_15": {"spec": "Бухгалтер", "gender" : "Female"},
            "id_16": {"spec": "Борт-проводница", "gender" : "Female"},
            "id_17": {"spec": "Фитнесс-тренер", "gender" : "Female"},
            "id_18": {"spec": "Уборщица", "gender" : "Female"}
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": {"name": "Января", "days": 31},
            "id_2": {"name": "Февраля", "days": 28},
            "id_3": {"name": "Марта", "days": 31},
            "id_4": {"name": "Апреля", "days": 30},
            "id_5": {"name": "Мая", "days": 31},
            "id_6": {"name": "Июня", "days": 30},
            "id_7": {"name": "Июля", "days": 31},
            "id_8": {"name": "Авгута", "days": 31},
            "id_9": {"name": "Сентябя", "days": 30},
            "id_10": {"name": "Октября", "days": 31},
            "id_11": {"name": "Ноября", "days": 30},
            "id_12": {"name": "Декабря", "days": 31}
        }
    }`,  


GENDER_MALE: 'Мужчина',
GENDER_FEMALE:'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
    
        } 
},

  

randomSurName: function() {
    if (this.person.gender === this.GENDER_FEMALE) {
       return this.randomValue(this.surnameJson) + 'а';
    } else {
        return this.randomValue(this.surnameJson);
    }
       
},

randomMiddleName: function () {
    if (this.person.gender === 'Женщина') {
    var mname = this.randomValue(this.firstNameMaleJson);    
        mname = mname.replace('андр','андровна');
        mname = mname.replace('им','имовна');
        mname = mname.replace('ван','вановна');
        mname = mname.replace('тем','темовна');
        mname = mname.replace('ей','еевна');
        mname = mname.replace('та','тична');
        mname = mname.replace('ил','иловна');
        mname = mname.replace('гор','горовна');
        mname = mname.replace('рий','риевна');
        return mname
} else {
    var mname = this.randomValue(this.firstNameMaleJson);    
        mname = mname.replace('андр','андрович');
        mname = mname.replace('им','имович');
        mname = mname.replace('ван','ванович');
        mname = mname.replace('ем','емович');
        mname = mname.replace('ей','еевич');
        mname = mname.replace('та','тич');
        mname = mname.replace('ил','илович');
        mname = mname.replace('гор','горович');
        mname = mname.replace('рий','риев');
}
     return mname;  
    
},

    RandomJob: function() {
        if (this.person.gender === this.GENDER_FEMALE) {  
            let job = this.randomValue(this.jobJson);
        while (job.gender === 'Male') {
            job = this.randomValue(this.jobJson);
        }
            return job.spec;

         } else {  (this.person.gender === this.GENDER_MALE)
            let job = this.randomValue(this.jobJson);
            while (job.gender === 'Female') {
                job = this.randomValue(this.jobJson);
            }
            
            return job.spec;
        }
    },

    

    randomGender: function() {
        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthday:function() {
        let Month = this.randomValue(this.monthJson);
        let Day = this.randomIntNumber(Month.days, 1);
        let year = this.randomIntNumber(2000, 1960);
        let date = Day + " " + Month.name + " " + year+" года";
        return date;
   },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.middleName = this.randomMiddleName();
        this.person.birthday = this.randomBirthday();
        this.person.job = this.RandomJob();
        return this.person;
    }
 };
