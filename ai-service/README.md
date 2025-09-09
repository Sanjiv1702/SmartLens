# AI Service (FastAPI)

Install and train:

```
cd ai-service
pip install -r requirements.txt
python train_model.py
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```
