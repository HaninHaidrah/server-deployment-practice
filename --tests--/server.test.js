'use strict';

// import app from server because its the one that we will test the Api for it
const {app}=require('../server');
const supertest=require('supertest');
const testRequest=supertest(app);// make instance as supertest is a framework


// write the test code:

describe('Testing APIS',()=>{
    test('if home page is working well',async()=>{
        const output= await testRequest.get('/')
        expect(output.status).toEqual(200);
    })

    test('if timerStamp is defined',async()=>{
        const output= await testRequest.get('/data')
        expect(output.status).toEqual(200);
        expect(output.body.time).toBeDefined();
    })
})

