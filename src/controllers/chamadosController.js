const db = require('../database/index');

module.exports = {
    async get(req, res) {
        try {
            let sql = "SELECT * FROM chamados";
            db.query(sql, function (err, result) {
                if (err) {
                    let errorDB = new Error("Database error");
                    errorDB.status = 500;
                    throw errorDB;
                }
                res.json(result)
            });
        } catch (err) {
            console.error(err);
        }
        
    },

    async post(req, res) {
        try {
            const { nome_usuario, dep_usuario, tel_usuario, descricao_chamado, num_equip, nome_equip } = req.body;
        
            let objToCheckNullValues = {
                nome_usuario,
                dep_usuario,
                tel_usuario,
                descricao_chamado,
                num_equip,
                nome_equip
            };
    
            let error = new Error('Parâmetro não informado');
            error.status = 400;
    
            for (let key in objToCheckNullValues) {
                if (!objToCheckNullValues[key]) {
                    throw error;
                }
            }

            if (typeof num_equip !== 'number') {
                let typeError = new Error("Type error on number equipment");
                typeError.status = 400;
                throw typeError;
            }

            let sql =  `INSERT INTO chamados (nome_usuario, dep_usuario, tel_usuario, descricao_chamado, num_equip, nome_equip) VALUES ("${nome_usuario}", "${dep_usuario}", "${tel_usuario}", "${descricao_chamado}", ${num_equip}, "${nome_equip}")`;

            db.query(sql, function(err, result) {
                if (err) {
                    console.log(err)
                    let errorDB = new Error("Database error");
                    errorDB.status = 500;
                    throw errorDB;
                }
                res.status(201).send();
            });
        } catch (err) {
            console.error(err);
        }
    }
}