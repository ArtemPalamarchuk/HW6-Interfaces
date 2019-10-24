public class LinkedList implements List {

    int length = 0;
    public Noda root = null;
    public Noda first = null;

    @Override
    public int size() {
        return this.length;
    }

    @Override
    public void push(int i) {
        Noda newNoda = new Noda(i);
        if (root.next == null) {
            root.next = newNoda;
            newNoda.prev = root;
        } else {
            tmp = root.next;
            while (first.next != null) {
                first = first.next;
            }
            first.next = tmp;
        }
        length++;
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
