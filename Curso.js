//Create a document
//Document -> Object type JSON
user1 = {
    'username': 'user1',
    'age': 27,
    'email': 'user1@exameple.com'
}

user2 = {
    'username': 'user2',
    'age': 57,
    'email': 'user2@exameple.com'
}

user3 = {
    'username': 'user3',
    'age': 12,
    'email': 'user3@exameple.com'
}

user11 = {
    'username': 'user11',
    'age': 25,
    'email': 'user11@exameple.com'
}


//Crear el objeto e insertar en la collection
//Se valida que la base de datos exista
//Se valida que la collections(users) exista
db.users.insert(user1);
db.users.insert(user2);

//Mostrar los documentos
db.users.find();

//Dato del ObjectId
// -> ObjectId("648d17fa2fbd7bb256958840")
//Object -> 4   
//1.-(Timestamp)
//2.-(Identificador para el servidor)
//3.-(PID=Proceso id)
//4.-(AutoIncrement)

//Segunda manera de insertar
db.users.insertOne(user3);

//Tercera manera, inserta varios documentos
db.users.insertMany([
    {
        'username': 'user4',
        'age': 41,
        'email': 'user4@exameple.com'
    },
    {
        'username': 'user5',
        'age': 43,
        'email': 'user5@exameple.com'
    },
    {
        'username': 'user6',
        'age': 19,
        'email': 'user6@exameple.com'
    },
    {
        'username': 'user7',
        'age': 18,
        'email': 'user7@exameple.com'
    },
    {
        'username': 'user8',
        'age': 21,
        'email': 'user8@exameple.com'
    },
    {
        'username': 'user9',
        'age': 51,
        'email': 'user9@exameple.com'
    },
    {
        'username': 'user10',
        'age': 22,
        'email': 'user10@exameple.com'
    }
]);

//Cuarta manera de guardar
//DATOS INTERESANTES
//-Si el objeto no exite,se crea (_id)
//-Si el objeto si existe,se ACTUALIZA (_id)
db.users.save(user11);

//----------------

//ENTRAMOS A LAS COSULTA

//Insertamos
db.users.insertMany([
    {
        'username': 'user12',
        'age': 32,
        'email': 'user12@exameple.com',
        'status': 'inactive'
    },
    {
        'username': 'user13',
        'age': 33,
        'email': 'user13@exameple.com',
        'status': 'inactive'
    },
    {
        'username': 'user14',
        'age': 39,
        'email': 'user14@exameple.com',
        'status': 'inactive'
    },
    {
        'username': 'user15',
        'age': 18,
        'email': 'user15@exameple.com',
        'status': 'active'
    }
]);

db.users.insertMany([
    {
        'username': 'user16',
        'age': 23,
        'email': 'user16@exameple.com'
    },
    {
        'username': 'user17',
        'age': 18,
        'email': 'user17@exameple.com'
    },
    {
        'username': 'user18',
        'age': 13,
        'email': 'user18@exameple.com'
    },
    {
        'username': 'user19',
        'age': 67,
        'email': 'user19@exameple.com'
    },
    {
        'username': 'user20',
        'age': 31,
        'email': 'user20@exameple.com'
    },
    {
        'username': 'user21',
        'age': 12,
        'email': 'user21@exameple.com'
    },
    {
        'username': 'user22',
        'age': 13,
        'email': 'user22@exameple.com'
    },
    {
        'username': 'user23',
        'age': 47,
        'email': 'user24@exameple.com'
    },
    {
        'username': 'user24',
        'age': 88,
        'email': 'user24@exameple.com'
    },
    {
        'username': 'user25',
        'age': 100,
        'email': 'user25@exameple.com'
    }
]);

//Para mostrar los documentos como un JSON
db.users.find().pretty();

//EJERCICIOS
//1.-Obtener el usuario con username user7
db.users.find({ //Retorna un cursor
    username: 'user7'
});

//1.2-Obtener un solo documento
db.users.findOne({  //Retornar un documento
    username: 'user7'
});

//2.-Obtener todos los usuarios con una edad mayor a 10
//OPERADORES RELACIONALES
//> (gt: valor)
//>= (gte: valor)
//< (lt: valor)
//=< (lte: valor)
//!= (ne: valor)

db.users.find({
    age: { $gt: 10 }
});

//3.-Obtener la cantidad de usuarios con una edad menor a 50
// CURSOR -> count()
db.users.find({
    age: { $lt: 50 }
}).count();

//4.-Obtener todos los usuarios con una age mayor a 10 y cuyo status sea activo
//condicional : $and, dentro de documentos
db.users.find({
    $and: [
        { age: { $gt: 10 } },
        { status: 'active' }
    ]
});

//5.-Obtener todos los usuarios cuya edad no sea 11
db.users.find({
    age: {
        $ne: 11
    }
});

//6.-Obtener todos los usuarios que tengan por edad: 27 o 40 o 11
//condicional : $or, dentro de documentos
//-1ra manera
db.users.find({
    $or: [
        { age: 27 },
        { age: 40 },
        { age: 11 }
    ]
});

//-2da manera
//LISTADO: $in, funciona como el (or), pero para busquedas mas extensa
db.users.find({
    age: { $in: [27, 40, 11] }
});

//7.-Obtener todos los usuarios con atributos status
db.users.find({
    status: { $exists: true }
});

//8.-Obtener todos los usuarios con status activos
db.users.find({
    status: 'active'
});

//8.1.-La mejor opcion es validar que exita
db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: 'active' }
    ]
});

//9.-Obtener todos los usuarios con status activo y correo electronico
db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: 'active' },
        { email: { $exists: true } }
    ]
});

//9.1.Si queremos que solo se muestre los email que tenga el .com
//Equivale al LIKE de MySQL
db.users.find({
    email: /.com$/
});

//9.2.-Si queremos que inicie con tales caracteres el email
db.users.find({
    email: /^user/
});

//9.3-Si tiene algun caracter, como el @
db.users.find({
    email: /@/
});

//10.-Obtener el usuario con mayor edad
//Podemos usar sort(), que es para ordenar
//limit(valor), para limitar la camtidad que queremos mostar
db.users.find().sort({
    age: -1 //Para pedir manera(-1,1)
}).limit(1); //Limitar la cantidad

//11.-Obtener a los tres usuarios mas jovenes
db.users.find().sort({
    age: 1
}).limit(3);


//----------CURSORES----------
//Termino simple: Es un objeto, el cual nos permite conocer todos aquellos documentos obtenidos en una consulta.
//--Cuando ingresamos el db.users.find(); esto nos trae los primeros 20 documentos, ya que un cursor trabaja por
//paginacion, si queremos ver la siguiente pagina, tenemos que agregar el -->(it)<--

//--Cursor para saltar n_cantidad de documentos
db.users.find().skip(5);

//find, sort, limit y skip, count y pretty -->

//Podemos hacer consulta y guardalos en una variable, pero solo se puede usar una verz, ya que se consume el cursor
var users = db.users.find().pretty();


//-----PROYECCIONES-----
//Es para mostrar los atributos que queremos obtener
db.users.find(
    {   //Definimos las condiciones
        age: { $gte: 56 }
    },
    {   //Proyeccion
        //_id: false, //Nos es recomendable, debemos saber siempre el id, por defecto
        username: true,
        age: true,
        email: true
    }
);


//-----ACTUALIZAR DOCUMENTOS------

//1RA MANERA - SAVE
var user = db.users.findOne(); //Obtenemos el 1re valor

//En user se almacena el primer valor
user

//Modificas o añades
user.age = 28
user.email = 'user1@codigoEasy.com.mx'
user.status = 'active'

//guardamos
db.users.save(user); //Se guarda los cambios

//2DA MANERA - UPDATE
//update, nos permite (por default) actualizar un solo documento
db.users.update(
    { //Condicio
        "_id": ObjectId("648d17fa2fbd7bb256958840")
    },
    { //Actualizacion o modificacion
        $set: {
            username: 'IH2GG',
            email: 'DragonMaligno656@ceprog.edu.mx',
            profile_picture: 'www.Isaac.com/user1',
            status: 'active'
        }
    }
);

//Quitar algun atributo
db.users.update(
    {
        "_id": ObjectId("648d17fa2fbd7bb256958840")
    },
    {
        $unset: {
            profile_picture: true
        }
    }
);

//Si deseo actualizar multiples documentos, debo agregar un tercer argumento
db.users.update(
    {//Condicion
        status: 'inactive'
    },
    { //Valor a modificar
        $set: {
            status: 'active'
        }
    },
    { //el argumento para que sea multiplo
        multi: true
    }
);

//Otra manera
// updateOne
db.users.updateOne(
    {
        "status": "active",
    },
    {
        $set: {
            status: 'inactive'
        }
    }
);

//Actualizar muchos updateMany()
db.users.updateMany(
    {
        email: { $exists: true }
    },
    {
        $set: {
            bio: 'Añade tu biografia'
        }
    }
);

//Actualizar todos los documentos, con updateMany aumentando en una las edades
db.users.updateMany(
    {},
    {
        $inc: {
            age: 1
        }
    }
);

//-----ELIMINAR------
//remove
//Sino ponemos algun atributos, mongoDB eliminar todos los documentos
db.users.remove({
    status: 'inactive'
});


//ELIMINAR LA COLLECTIONS
//db
//show collections
//db.users.drop()
//eliminamos la collections

//Eliminar la base de datos
db.dropDatabase();


//-------------------------------------------------------------------
//Trabajar con documentos mas complejos
user25 = {
    'username': 'user25',
    'email': 'user25@example.com',
    'age': 56,
    'status': 'active',
    'address': {
        'zip': 1001,
        'country': 'MX'
    },
    'course': ['Python', 'MongoDB', 'Ruby', 'Java'],
    'comments': [
        {
            body: 'Best course',
            like: true,
            tags: ['MongoDB']
        },
        {
            body: 'Super excited',
            like: true
        },
        {
            body: 'The course is OK',
        },
        {
            body: 'Bad courses,I`m disappointed',
            like: false,
            tags: ['bad', 'course', 'MongoDB']
        }
    ]
};

user26 = {
    'username': 'user26',
    'email': 'user26@example.com',
    'age': 16,
    'status': 'active',
    'comments': [
        {
            body: 'Best course',
            like: true
        }
    ]
};

user27 = {
    'username': 'user27',
    'email': 'user27@example.com',
    'age': 96,
    'status': 'active',
    'comments': [
        {
            body: 'Best course',
            like: false
        }
    ]
};

//Despues los insertamos
db.users.insertMany(
    [user25, user26, user27]
);

//----EJERCICIOS-----

//1.-Obtener los usuario que radiquen en mexico
db.users.find(
    {
        'address.country': 'MX'
    },
    {
        username: true,
        'address.zip': true
    }
);


//2.-Actualizar el CP
db.users.updateMany(
    {
        'address.zip': { $exists: true }
    },
    {
        $set: {
            'address.zip': 506
        }
    }
);

//2.1-Añadir direcció a todos los usuarios que no la posean
db.users.updateMany(
    {
        'address': { $exists: false }
    },
    {
        $set: {
            'address': {
                country: 'MX',
                zip: 2568
            }
        }
    }
);

//Aptualizar un docuemntos
db.users.updateOne(
    {
        username: 'IH2GG'
    },
    {
        $set: {
            'address.location': { //Se le agrega para solo se agregue, sino remplezará, esta es mejor opcion
                lat: -675,
                long: 564
            }
        }
    }
);

//--Si deseo ver solo el resultado modificado
db.users.findOne({ username: 'IH2GG' });

//3.-Obtener todos los usuarios que tengan en su listado de cursos python
db.users.find(
    {
        course: { $exists: true }
    }
).pretty();

//4.-Obtener todos los usuarios que por lo meno tenga un comentario positivo
//---> Usar el elemMatch. Nos permite filtrar sobre atributos de documentos dentro de listados
db.users.find(
    {
        comments: {
            $elemMatch: {
                like: true
            }
        }
    }
).pretty();

//Hacerlo mas complejo 
db.users.find(
    {
        comments: {
            $elemMatch: {
                $and: [
                    { like: true },
                    { tags: { $exists: true } }
                ]
            }
        }
    },
    { // Si gustamo proyectar
        comments: true
    }
);

//5.-Añadir un nuevo comentario positivo al listado de comentarios para el user11
db.users.updateOne(
    {
        username: 'user11'
    },
    {
        //Ya no usamos set, sino push, para agregar 
        $push: {
            comments: {
                like: true,
                body: '¡El curso de MongoDB es muy GOD!'
            }
        }
    }
);


//6.-Añade una nueva etiqueta el 4 comentario del usuario 25
db.users.updateOne(
    {
        username: 'user25'
    },
    {
        $push: {
            'comments.3.tags': 'Tutor'
        }
    }
);

//7.-Actualiza el segundo comentario del usuario 25.
db.users.updateOne(
    {
        username: 'user25'
    },
    {
        $set: {
            'comments.1.body': 'Chido el Curso :D'
        }
    }
);

//8.-Actualiza el comentario negativo del usuario 25.
//$ como no conocemos el índece, el comodigo lo remplazará
db.users.updateOne(
    {
        username: 'user25',
        'comments.like': false //Permite conocer el índice de los docuementos dentro de la lista que queremos actualizar
    },
    {
        $set: {
            'comments.$.body': 'El curso es muy bueno',
            'comments.$.like': true
        },
        $unset: { //para quitar el atributo
            'comments.$.tags': true
        }
    }
);


//RESPALDO DE INFORMACION por el CMD
/*
mkdir nombre_carpeta
cd nombre_carpeta
ls o dir
mongodump --db nombre_db

-----------------
--Elimin
db.dropDatabase(); vamos la base de datos

--Como ya tenemos el respaldo, regresamos a la carpeta que tenemos el respaldo
--Nos vamos a la carpeta --> backup\dump
mongorestore --db codigoEasy dump\codigoEasy\
*/














