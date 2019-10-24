public class LinkedList implements List {

    private Noda root;
    private int length = 0;

    class Noda {
        private int element;
        private Noda prev;
        private Noda next;
    }

    public Noda createNoda(int element){
        Noda noda = new Noda();
        noda.element = element;
        noda.prev = null;
        noda.next = null;
        return noda;
    }

    @Override
    public int size() {
        return this.length;
    }

    @Override
    public void push(int value) {
        Noda newNoda = createNoda(value);

    }



    @Override
    public void pop() {

    }

    @Override
    public void unshift(int i) {

    }

    @Override
    public void shift() {

    }

    @Override
    public void toString(int[] a) {

    }

    @Override
    public int[] sort(int[] a) {
        return new int[0];
    }
}
