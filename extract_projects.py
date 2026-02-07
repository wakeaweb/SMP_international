import docx
import json
import os

def debug_structure(docx_path):
    doc = docx.Document(docx_path)
    debug_info = []
    
    for i, para in enumerate(doc.paragraphs):
        if para.text.strip():
            debug_info.append({
                "index": i,
                "style": para.style.name,
                "text": para.text.strip()
            })
            
    return debug_info

if __name__ == "__main__":
    base_path = r"c:\Users\selim\VibeCoding -Folder\Projects\SMP International - Copy\Projects"
    docx_path = os.path.join(base_path, "Projects.docx")
    output_path = "debug_output.json"
    
    try:
        data = debug_structure(docx_path)
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print("Debug output saved to " + output_path)
    except Exception as e:
        print(str(e))
