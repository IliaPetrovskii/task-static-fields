/*
1. Добавьте публичное поле `counter` с начальным значением `0`
2. Добавьте публичное статическое поле `counterStatic` с начальным значением `0`
3. Добавьте публичный статический метод `PI`, возвращающий значение `Math.PI`
4. Добавьте публичный статический метод `ceil`, возвращающий число округленное в большую сторону
 */
export default class TestClass {
    public counter: number = 0;
    public static counterStatic: number = 0;

    static PI(): number {
        return Math.PI;
    }

    static ceil(num: number): number {
        return Math.ceil(num);
    }
}
