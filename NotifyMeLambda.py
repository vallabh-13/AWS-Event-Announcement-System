import json
import boto3

def lambda_handler(event, context):
    sns = boto3.client('sns')
    body = json.loads(event['body'])
    message = body.get('message', 'No message provided')

    response = sns.publish(
        TopicArn='arn:aws:sns:us-east-2:561645284595:NotifyMe',
        Message=message
    )

    return {
    'statusCode': 200,
    'headers': {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
    },
    'body': json.dumps({'status': 'Notification sent'})
}

