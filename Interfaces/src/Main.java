public class Main {

    public static void main(String[] args) {
        ArrayList a = new ArrayList();
        a.push(457);
        a.push(24);
        a.push(72);
        a.push(0);
        a.push(-23);
        a.push(-66);
        a.push(566);
        //a.pop();
        //a.unshift(111);
        //a.shift();
        a.showArray();
        a.sort(a.a);
        a.showArray();
        LinkedList l = new LinkedList();

        Noda noda = new Noda(1);
        Noda noda2 = new Noda(2);
        System.out.println(noda2.next);


    }
}
