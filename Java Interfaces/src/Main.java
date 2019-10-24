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
        arrayList.printArray();
        arrayList.sort(arrayList.array);
        arrayList.printArray();

        LinkedList l = new LinkedList();

        l.push(5);
        l.push(6);
        l.push(8);



    }
}
