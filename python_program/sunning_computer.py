import json
import pandas as pd

with open('python_program/suning_phone.json', 'r', encoding='utf-8') as origin_suning_phone:
    suning_phone_sales_data = json.load(origin_suning_phone)

df = pd.DataFrame(suning_phone_sales_data)

new_json_data = df.to_json(orient="records", force_ascii=False)

with open('python_program/new_suning_phone.json', 'w', encoding='utf-8') as new_suning_phone:
    new_suning_phone.write(new_json_data)