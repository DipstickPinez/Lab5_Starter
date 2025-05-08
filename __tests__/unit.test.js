// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Test PhoneNumber
test('363-223-2157 is a valid Phone Number', () => {
  expect(isPhoneNumber("363-223-2157")).toBe(true);
});

test('(111)-111-1111 is a valid Phone Number', () => {
  expect(isPhoneNumber("(111) 111-1111")).toBe(true);
});

test('1234567890 is not a valid Phone Number', () => {
  expect(isPhoneNumber("1234567890")).toBe(true);
});

test('aaa-aaa-aaaa is a valid Phone Number', () => {
  expect(isPhoneNumber("aaa-aaa-aaaa")).toBe(true);
});


//Test Emails
test('dougdoug@dougdoug.com is a valid Email', () => {
  expect(isEmail("dougdoug@dougdoug.com")).toBe(true);
});

test('gmail@gmail.edu is a valid Email', () => {
  expect(isEmail("gmail@gmail.edu")).toBe(true);
});

test('brianHands@google,com is not a valid Email', () => {
  expect(isEmail("brianHands@google,com")).toBe(true);
});

test('bottomText@google.comm is not a valid Email', () => {
  expect(isEmail("bottomText@google.comm")).toBe(true);
});

//Test Strong Passwords
test('password123 is a strong password', () => {
  expect(isStrongPassword("password123")).toBe(true);
});

test('whetherwewanted is a strong password', () => {
  expect(isStrongPassword("whetherwewanted")).toBe(true);
});

test('123@password is not a strong password', () => {
  expect(isStrongPassword("123@password")).toBe(true);
});

test('correcthorsebatterystaple is not a strong password', () => {
  expect(isStrongPassword("correcthorsebatterystaple")).toBe(true);
});


//Test Dates
test('5/7/2025 is a date', () => {
  expect(isDate("5/7/2025")).toBe(true);
});

test('1/1/1999 is a date', () => {
  expect(isDate("1/1/1999")).toBe(true);
});

test('1-1-1999 is not a date', () => {
  expect(isDate("1-1-1999")).toBe(true);
});

test('aaaaaaa is not a date', () => {
  expect(isDate("aaaaaaa")).toBe(true);
});

//Test HexColors

test('#FFF is a Hex Color', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('5BCEFA is a Hex Color', () => {
  expect(isHexColor("5BCEFA")).toBe(true);
});

test('rgb(1, 206, 250) is not a Hex Color', () => {
  expect(isHexColor("rgb(1, 206, 250)")).toBe(true);
});

test('hexColor is not a Hex Color', () => {
  expect(isHexColor("hexColor")).toBe(true);
});

