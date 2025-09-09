from sklearn.ensemble import IsolationForest
import joblib
import numpy as np
import os
X = np.random.normal(loc=1000, scale=500, size=(1000,1))
model = IsolationForest(contamination=0.01, random_state=42)
model.fit(X)
os.makedirs('model', exist_ok=True)
joblib.dump(model, 'model/isolation_forest.pkl')
print('Model trained and saved to model/isolation_forest.pkl')
