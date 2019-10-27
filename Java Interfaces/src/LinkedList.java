public class LinkedList implements List {

    public Noda head;
    public Noda lastNoda;
    public int length = 0;

    class Noda {
        public int value;
        public Noda next;
        public Noda prev;
    }

    private Noda createNoda(int element){
        Noda noda = new Noda();
        noda.value = element;
        noda.prev = null;
        noda.next = null;
        return noda;
    }

    public void showAll(){
        Noda noda = this.head;
        System.out.print(noda.value);
        while(noda.next != null){
            noda = noda.next;
            System.out.print(noda.value);
        }
    }

    @Override
    public int size() {
        return this.length;
    }

    @Override
    public int push(int element) {
        Noda noda = createNoda(element);
        if (this.head == null){
            this.head = noda;
            lastNoda = this.head;
            this.length++;
        }
        else{
             noda.prev = lastNoda;
             noda.prev.next = noda;
             lastNoda = noda;
             this.length++;
        }
        return element;
    }

    @Override
    public int pop() {
        int element = lastNoda.value;
        lastNoda.prev.next = null;
        lastNoda = lastNoda.prev;
        this.length--;
        return element;
    }

    @Override
    public void unshift(int element) {
        Noda noda = createNoda(element);
        Noda headNext = this.head.next;
        Noda headNextPrev = this.head.next.prev;
        Noda tmp = this.head;
        this.head = noda;
        this.head.next = headNext;
        this.head.next.prev = headNextPrev;
        this.head.prev = noda;
        noda.next = this.head.prev.next;

        this.head.next.prev = tmp;
        tmp.next = this.head.next;
        this.head.next = tmp;
        tmp.prev = this.head.next;
        this.length++;
    }

    @Override
    public void shift() {
        Noda tmp = this.head.next;
        this.head.next.next.prev  = this.head.next;
        this.head.next = this.head.next.next;
        this.head = tmp;

    }

    @Override
    public void toString(int[] a) {

    }

    @Override
    public int[] sort(int[] a) {
        return new int[0];
    }
}
