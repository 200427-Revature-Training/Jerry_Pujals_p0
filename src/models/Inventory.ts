export class Inventory {

    Itemid: number;
    Itemname: string;
    Ammount: number;
    Price: number;
    
    
    
    // Structure of account
    
    static from(obj: InventoryRow): Inventory {
        const inventory = new Inventory(obj.Itemid, obj.Itemname, obj.Ammount, obj.Price);
        return inventory;
    }
    
    constructor(Itemid: number, Itemname: string, Ammount: number, Price: number) {
        this.Itemid = Itemid;
        this.Itemname = Itemname;
        this.Ammount = Ammount;
        this.Price = Price;
    }
    
    
    }
    
    
    export interface InventoryRow {
    
        Itemid: number;
        Itemname: string;
        Ammount: number;
        Price: number;
    
    
    
    }