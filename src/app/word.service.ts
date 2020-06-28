import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordUrl= 'http://127.0.0.1:2403/vacabulary';

  constructor(private httpcilent: HttpClient) { }
  //获取所有的单词，返回的是同数目的object数组
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
  //更新
  updateWord(word:Word):Observable<Word>{
    return this.httpcilent.put<Word>(this.wordUrl,word);
  }
  //通过id删除
  deleteById(id:String):Observable<Word>{
    return this.httpcilent.delete<Word>(`${this.wordUrl}/${id}`);
  }
  //获取收藏单词
  getCollectedWord():Observable<Word[]>{
    return this.httpcilent.get<Word[]>(`${this.wordUrl}?collect=true`);
  }
  //通过name搜索单词
  searchByname(names:string):Observable<Word>{
    return this.httpcilent.get<Word>(`${this.wordUrl}?name=${names}`);
  }
  //修改是否为收藏单词
  changeColecte(word :Word):Observable<Word>{
    return this.httpcilent.put<Word>(`${this.wordUrl}/${word.id}`, word);
  }

  }


