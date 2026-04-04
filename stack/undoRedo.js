class TextEditor{
    constructor (){
        this.content = "";
        this.undoStack= [];
        this.redoStack = [];
    }
    type(newText) {
        this.undoStack.push(this.content);
        this.content +=newText;
        this.redoStack  = [];
        console.log(`Typed: "${newText}" | Current : "${this.content}"`);
    }
    undo() {
        if(this.undoStack.length === 0) {
            console.log("Nothing to undo");
            return;
        }
        this.redoStack.push(this.content);
        this.content = this.undoStack.pop();
        console.log(`Undo performed | Current: "${this.content}"`);
    }
    redo() {
        if(this.redoStack.length === 0){
            console.log("Nothing to Redo!");
            return;
        }
        this.undoStack.push(this.content);
        this.content = this.redoStack.pop();
        console.log(`Redo performed  | Current: "${this.content}"`);
    }

}

const textEditor = new TextEditor();
textEditor.undo();
textEditor.type("Hello ");
textEditor.type("World");
textEditor.undo();
textEditor.undo();
textEditor.undo();
textEditor.redo();
textEditor.redo();
textEditor.redo();