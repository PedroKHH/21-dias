class Computer {
  Type;
  Processor;
  Video;
  Storage;
  RAMMemory;
  SSD;

  constructor(type, processor, video, storage, RAMMemory, SSD) {
    this.Type = type;
    this.Processor = processor;
    this.Video = video;
    this.Storage = storage;
    this.RAMMemory = RAMMemory;
    this.SSD = SSD;
  }

  show() {
    console.log(`Tipo do computador: ${this.Type} - Processador: ${this.Processor} - Video: ${this.Video} -
Armazenamento: ${this.Storage} GB de memória - Memória RAM: ${this.RAMMemory} GB - SSD: ${this.SSD} `);
  }
}

let computer = new Computer(
  "Desktop",
  "CORE i5",
  "Dedicado",
  "1000",
  "16",
  true
);

computer.show();
