import java.util.Scanner;
import javax.swing.*;
import java.text.DecimalFormat;

class main_apl  {
    public static void main (String []xx)  {
        Scanner coba = new Scanner (System.in);
        apl a = new apl();
        System.out.print("MASUKKAN NAMA    : \t"); 
        a.nama = coba.nextLine();
        System.out.print("MASUKKAN ALAMAT  : \t");
        a.alamat = coba.nextLine();
        System.out.print("MASUKKAN NO.TELP : \t");
        a. telepon = coba.nextLine();
        System.out.print("MASUKKAN UMUR    : \t");
        a.umur =  coba.nextLine();
        System.out.println();
        System.out.println("===============================================");
        System.out.println("===============================================");
        gaji karyawan = new gaji("ASN","DIREKTUR","Sampai 2025");
        gaji karyawan2 = new gaji(15000000,500000,300000);
        karyawan.output();
        System.out.println();
        karyawan2.output2();
        System.out.println("===============================================");
    }
}

class apl{
    String nama, alamat, telepon, umur;
    
    void datadiri () {
        System.out.println("\nNama Karyawan  : \t \t\t"+nama);
        System.out.println("Alamat           : \t \t\t"+alamat);
        System.out.println("Nomor Telepon    : \t \t\t"+telepon);
        System.out.println("Umur             : \t \t\t"+umur);
    }
}

class gaji{
    String divisi, jabatan, kontrak;
    int gajipokok,lemburan, uangmakan, datagaji;
    gaji (String divisi, String jabatan, String kontrak) {
        this.divisi=divisi;
        this.jabatan=jabatan;
        this.kontrak=kontrak;
    }

    gaji(int gajipokok, int lemburan, int uangmakan) {
        this.gajipokok=gajipokok;
        this.lemburan=lemburan;
        this.uangmakan=uangmakan;
    }
    
    int datagaji() {
        return gajipokok+lemburan+uangmakan;
    }
    
    void output() {
        System.out.println("Divisi                  : "+this.divisi);
        System.out.println("Jabatan                 : "+this.jabatan);
        System.out.println("Kontrak                 : "+this.kontrak);
    }
    
    void output2() {
            DecimalFormat df = new DecimalFormat("##0,000");
        
        System.out.println("Gaji Pokok              : Rp. "+this.gajipokok);
        System.out.println("Lemburan                : Rp. "+this.lemburan);
        System.out.println("Uang Makan              : Rp. "+this.uangmakan);
        System.out.println("Total Gaji              : Rp. "+df.format(datagaji()));
    }
}