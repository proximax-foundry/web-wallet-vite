import { WalletAccount } from './walletAccount';
import { AddressBook } from './addressBook';
import { OtherAccount } from './otherAccount';

export class Wallet{

    name: string;
    networkName: string;
    accounts: WalletAccount[];
    others: OtherAccount[] = [];
    contacts: AddressBook[] = [];

    constructor(name: string, networkName: string, accounts: WalletAccount[]){
        this.name = name;
        this.networkName = networkName;
        this.accounts = accounts;
    }

    updateAccount(index: number, WalletAccount: WalletAccount): void{
        this.accounts[index] = WalletAccount;
    }

    removeAccount(accountName: string): void{
        const index = this.accounts.findIndex((account)=> account.name == accountName);

        this.accounts.splice(index, 1);
    }

    convertAddressToName(address: string): string{
        let aliasName :string = "";

        const addressBook = this.contacts.find((addressBook)=> addressBook.address === address);

        if(addressBook){
            aliasName = addressBook.name;
        }else{
            const walletAccount = this.accounts.find((walletAccount)=> walletAccount.address === address);

            if(walletAccount){
                aliasName = walletAccount.name;
            }
        }

        return aliasName ? aliasName : address;
    }

    addAddressBook(addressBook: AddressBook): void{
        this.contacts.push(addressBook);
    }

    removeAddressBook(index: number): void{
        this.contacts.splice(index, 1);
    }

    updateAddressBook(index: number, addressBook: AddressBook): void{
        this.contacts[index] = addressBook;
    }

    selectDefaultAccount(): WalletAccount{
        return this.accounts.find((walletAccount)=> walletAccount.default === true);
    }

    setDefaultAccountByAddress(address: string): void{
        let accounts: WalletAccount[] = this.accounts.filter((account)=> account.default === true);

        for(let i = 0; i < accounts.length; ++i){
            accounts[i].default = false;
        }

        let account: WalletAccount = this.accounts.find((account)=> account.address === address);

        account.default = true;
    }

    setDefaultAccountByName(name: string): void{
        let accounts: WalletAccount[] = this.accounts.filter((account)=> account.default === true);

        for(let i = 0; i < accounts.length; ++i){
            accounts[i].default = false;
        }

        let account: WalletAccount = this.accounts.find((account)=> account.name === name);

        account.default = true;
    }
}