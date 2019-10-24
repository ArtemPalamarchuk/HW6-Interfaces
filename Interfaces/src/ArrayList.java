public class ArrayList implements List {

    int length = 0;
    int a [] = new int[50];


    public void showArray() {
        for(int i = 0; i < this.size(); i++){
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    @Override
    public int size() {
        return this.length;
    }

    @Override
    public void push(int value) {
        this.a[this.size()] = value;
        length++;
    }


    @Override
    public void pop() {
        int delete = a[this.size()];
        a[this.size()] = 0;
        length--;
        //System.out.println(delete);
    }

    @Override
    public void unshift(int value) {
        for(int i = this.size(); i >  0 ; i--){
            this.a[i] = this.a[i - 1];
        }
        a[0] = value;
        length++;
    }

    @Override
    public void shift() {
        String delete = this.size() + " deleted";
        for(int i = 0; i < size() ; i++){
            this.a[i] = this.a[i + 1];
        }
        length--;
        //System.out.println(delete);
    }


    @Override
    public void toString(int[] a) {
        String str = "";
        for(int i = 0; i < size() ; i++){
            str += this.a[i] + ", ";
        }
        str =  str.substring(0, str.length() - 2) + " - String";
        System.out.println(str);
    }

    @Override
    public int[] sort(int[] arr) {
        for (int i = 0, endI = size() - 1; i < endI; i++){
            boolean isSwap = false;
            int tmp;
            for (int j = 0, endJ = endI - i; j < endJ; j++){
                if (arr[j] > arr[j + 1]){
                    tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    isSwap = true;
                }
            }
            if (!isSwap){break;}
        }
        return arr;
    }

}
