import {DepositContract} from "../src/DepositContract";
import {LoanContract} from "../src/LoanContract";
import {InsuranceContract} from "../src/InsuranceContract";
import {BaseContract} from "../src/BaseContract";
// testing commits....
describe ("check info in contracts", () => {
    let userBase: BaseContract;
    let user: DepositContract;
    let user1: LoanContract;
    let user2: InsuranceContract;

    beforeEach(() => {
        userBase = new BaseContract("ID", "name", false);
        user = new DepositContract("ID1", "Tom", false, 100, 200);
        user1 = new LoanContract("ID2", "Ana", false, 300, 50, 12);
        user2 = new InsuranceContract("ID3", "Jack", false, "health", 1, 5);
        user.activate();
        user1.activate();
        user2.activate();
    })
    describe("activated/deactivated methods", () => {
        test("activate should change is active false to is active true", () => {
            userBase.activate()
            expect(userBase.isActive).toBe(true);
        })
        test("deactivate should change is active true to is active false", () => {
            userBase.deactivate()
            expect(userBase.isActive).toBe(false);
        })
        test("all contract should be active after activated", () => {
            user.activate();
            user1.activate();
            user2.activate();
            expect(user.isActive).toBe(true);
            expect(user1.isActive).toBe(true);
            expect(user2.isActive).toBe(true);
        })
    })
    describe("data and calculations", () => {
        test("check base contract info is correct", () => {
            expect(userBase.contractId).toBe("ID");
            expect(userBase.clientName).toBe("name");
        })
        test("check deposit contract info and calculation is correct", () => {
            expect(user.contractId).toBe("ID1");
            expect(user.clientName).toBe("Tom");
            expect(user.calculateInterest()).toBe(200);
        })
        test("check loan contract info and calculation is correct", () => {
            expect(user1.contractId).toBe("ID2");
            expect(user1.clientName).toBe("Ana");
            expect(user1.calculateTotalPayment()).toBe(600);
        })
        test("check insurance contract info and calculation is correct", () => {
            expect(user2.contractId).toBe("ID3");
            expect(user2.clientName).toBe("Jack");
            expect(user2.calculateTotalPremium()).toBe(5);
        })
    })
    afterEach(() => {
        user.deactivate();
        user1.deactivate();
        user2.deactivate();
        console.log("contracts are deactivated, all tests completed")
    })
})