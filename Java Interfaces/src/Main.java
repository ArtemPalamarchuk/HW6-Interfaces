public class Main {

    public static void main(String[] args) {
        ArrayList arrayList = new ArrayList();

        arrayList.push(457);
        arrayList.push(24);
        arrayList.push(72);
        arrayList.push(0);
        arrayList.push(-23);
        arrayList.push(-66);
        arrayList.push(566);
        arrayList.pop();
        arrayList.unshift(111);
        arrayList.shift();
       // arrayList.printArray();
        arrayList.sort(arrayList.array);
        //arrayList.printArray();

        LinkedList l = new LinkedList();

        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);
        l.push(5);
        l.push(6);
        l.push(7);
        l.push(8);
        l.push(9);

        l.showAll();

        l.pop();
        l.pop();
        l.pop();
        l.pop();
        l.pop();
        System.out.println("");
        l.showAll();

        l.unshift(5);
        l.unshift(6);
        l.unshift(7);
        l.unshift(8);
        l.unshift(9);
        System.out.println("");
        l.showAll();

        l.shift();
        l.shift();
        l.shift();
        l.shift();
        l.shift();
        System.out.println("");
        l.showAll();









    }
}
