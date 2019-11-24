import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordUrl= 'http://127.0.0.1:2403/vacabulary';


  constructor(private httpcilent: HttpClient) { }
  //获取所有的单词，返回的是object数组
  getwords():Observable<Word[]>{
    return this.httpcilent.get<Word[]>(this.wordUrl);
  }
  //通过ID获取单词
  getWordById(id:String):Observable<Word>{
    return this.httpcilent.get<Word>(`${this.wordUrl}/${id}`);
  }
  //添加一个单词
  addWord(word:Word):Observable<Word>{
    return this.httpcilent.post<Word>(this.wordUrl,word);
  }

}
