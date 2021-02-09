'use strict';

//2а
let startBtn = document.getElementById('start');

//2b
let plusBtnIncomeAdd = document.getElementsByTagName('button')[0];

let plusBtnExpensesAdd = document.getElementsByTagName('button')[1];

//2c
let checkBoxInput = document.querySelector('#deposit-check');

//2d
let additionalIncomeItemFirst = document.queryCommandEnabled('additional_income-item')[0];

let additionalIncomeItemSecond = document.queryCommandEnabled('additional_income-item')[1];

// 2e -value
let budgetMonthValue = document.getElementsByClassName('budget_month-value');

let budgetDayValue = document.getElementsByClassName('budget_day-value');

let expensesMonthValue = document.getElementsByClassName('expenses_month-value');

let additionalIncomeValue = document.getElementsByClassName('additional_income-value');

let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');

let incomePeriodValue = document.getElementsByClassName('income_period-value');

let targetMonthValue = document.getElementsByClassName('target_month-value');


// 2f - inputs
let salaryAmount = document.querySelector('.salary-amount');

let incomeTitle = document.querySelector('.income-title');

let incomeAmount = document.querySelector('.income-amount');

let expensesTitle = document.querySelector('.expenses-title');

let expensesAmount = document.querySelector('.expenses-amount');

let additionalExpensesItem = document.querySelector('additional_expenses-item');

let depositCheckInput = document.querySelector('#deposit-check');

let targetAmount = document.querySelector('.target-amount');

let periodSelect = document.querySelector('.period-select');