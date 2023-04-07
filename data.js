class Data {
    banks = [
        {
            id: 1,
            name: 'bubank',
            balance: 430.00,
            ag: '0001',
            account: '999999'
        },
        {
            id: 2,
            name: 'mantander',
            balance: 2330.07,
            ag: '0001',
            account: '999999'
        },
        {
            id: 3,
            name: 'vinter',
            balance: 3.25,
            ag: '0001',
            account: '999999'
        }]
    statements = [
        {
            id: 1,
            bankId: 1,
            model: 'pix',
            value: -30.00,
            name: 'joão das dores',
            dateTime: '04/04/23'
        },
        {
            id: 2,
            bankId: 1,
            model: 'pix',
            value: -200.00,
            name: 'arena brb',
            dateTime: '02/04/23'
        },
        {
            id: 3,
            bankId: 1,
            model: 'pix',
            value: 1250.00,
            name: 'ct Salario',
            dateTime: '02/04/23'
        },
        {
            id: 4,
            bankId: 2,
            model: 'pix',
            value: -50.00,
            name: 'jorge amado',
            dateTime: '04/04/23'
        },
        {
            id: 5,
            bankId: 2,
            model: 'pix',
            value: -50.00,
            name: 'jorge amado',
            dateTime: '02/04/23'
        },
        {
            id: 6,
            bankId: 2,
            model: 'pix',
            value: 250.00,
            name: 'jose filho',
            dateTime: '28/03/23'
        },
        {
            id: 7,
            bankId: 2,
            model: 'pix',
            value: 470.00,
            name: 'jose filho',
            dateTime: '26/03/23'
        },
        {
            id: 8,
            bankId: 3,
            model: 'pix',
            value: 3.00,
            name: 'lucas santos',
            dateTime: '04/04/23'
        }]

    getBank(){
        return this.banks
    }

    getStatement(){
        return this.statements
    }
}
module.exports = Data