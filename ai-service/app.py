from fastapi import FastAPI
from pydantic import BaseModel
import joblib, os
app = FastAPI(title='SmartFinance AI')
MODEL_PATH = os.environ.get('AI_MODEL_PATH','model/isolation_forest.pkl')
model = None
try:
    model = joblib.load(MODEL_PATH)
except Exception as e:
    print('Model not found, please run train_model.py to create a model')
class Txn(BaseModel):
    amount: float
    category: str
    timestamp: float
@app.post('/score')
def score(txn: Txn):
    if model is None:
        return { 'anomaly': False, 'score': 0.0, 'warning': 'no model available' }
    X = [[txn.amount]]
    score = float(model.decision_function(X)[0])
    is_anomaly = bool(model.predict(X)[0] == -1)
    return {'anomaly': is_anomaly, 'score': score}
